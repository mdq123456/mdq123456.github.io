import { chromium, type Browser, type Page } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import type { AxeResults, Result } from 'axe-core';

interface ViolationSummary {
  critical: number;
  serious: number;
  moderate: number;
  minor: number;
}

const analyzeAccessibility = async (): Promise<void> => {
  console.log('🔍 Iniciando análisis de accesibilidad...\n');
  
  const browser: Browser = await chromium.launch();
  const context = await browser.newContext();
  const page: Page = await context.newPage();
  
  let accessibilityScanResults: AxeResults;
  let cvScanResults: AxeResults;
  
  try {
    // Test homepage
    console.log('📄 Analizando página principal...');
    await page.goto('http://localhost:4321');
    await page.waitForLoadState('networkidle');
    
    accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    
    console.log(`✅ Página principal: ${accessibilityScanResults.violations.length} violaciones encontradas`);
    
    if (accessibilityScanResults.violations.length > 0) {
      console.log('\n🚨 VIOLACIONES EN PÁGINA PRINCIPAL:');
      displayViolations(accessibilityScanResults.violations);
    }
    
    // Test CV page
    console.log('\n📄 Analizando página CV...');
    await page.goto('http://localhost:4321/cv');
    await page.waitForLoadState('networkidle');
    
    cvScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    
    console.log(`✅ Página CV: ${cvScanResults.violations.length} violaciones encontradas`);
    
    if (cvScanResults.violations.length > 0) {
      console.log('\n🚨 VIOLACIONES EN PÁGINA CV:');
      displayViolations(cvScanResults.violations);
    }
    
    const totalViolations = accessibilityScanResults.violations.length + cvScanResults.violations.length;
    
    displaySummary(accessibilityScanResults.violations, cvScanResults.violations, totalViolations);
    
  } catch (error) {
    console.error('❌ Error durante el análisis:', (error as Error).message);
    process.exit(1);
  } finally {
    await browser.close();
  }
  
  // Exit with error if violations found
  const totalViolations = (accessibilityScanResults?.violations?.length || 0) + 
                         (cvScanResults?.violations?.length || 0);
  
  if (totalViolations > 0) {
    process.exit(1);
  }
};

const displayViolations = (violations: Result[]): void => {
  violations.forEach((violation, index) => {
    console.log(`\n${index + 1}. ${violation.id} (Impacto: ${violation.impact})`);
    console.log(`   📝 ${violation.description}`);
    console.log(`   🎯 Elementos afectados: ${violation.nodes.length}`);
    
    if (violation.helpUrl) {
      console.log(`   📚 Más info: ${violation.helpUrl}`);
    }
    
    violation.nodes.slice(0, 3).forEach((node, nodeIndex) => {
      console.log(`   • Elemento ${nodeIndex + 1}: ${node.target.join(', ')}`);
      if (node.failureSummary) {
        console.log(`     ❌ ${node.failureSummary.split('\\n')[0]}`);
      }
    });
    
    if (violation.nodes.length > 3) {
      console.log(`   ... y ${violation.nodes.length - 3} elementos más`);
    }
  });
};

const displaySummary = (mainViolations: Result[], cvViolations: Result[], totalViolations: number): void => {
  console.log('\n' + '='.repeat(60));
  console.log('📊 RESUMEN DEL ANÁLISIS');
  console.log('='.repeat(60));
  console.log(`📄 Páginas analizadas: 2`);
  console.log(`🚨 Total de violaciones: ${totalViolations}`);
  
  if (totalViolations === 0) {
    console.log('\n🎉 ¡EXCELENTE! Tu portfolio cumple con los estándares WCAG 2.1 AA');
    console.log('✅ No se encontraron problemas de accesibilidad');
  } else {
    console.log('\n⚠️  Se encontraron problemas de accesibilidad que deben corregirse:');
    
    const allViolations = mainViolations.concat(cvViolations);
    const summary: ViolationSummary = {
      critical: allViolations.filter(v => v.impact === 'critical').length,
      serious: allViolations.filter(v => v.impact === 'serious').length,
      moderate: allViolations.filter(v => v.impact === 'moderate').length,
      minor: allViolations.filter(v => v.impact === 'minor').length
    };
    
    if (summary.critical > 0) console.log(`   🔴 Críticas: ${summary.critical}`);
    if (summary.serious > 0) console.log(`   🟠 Serias: ${summary.serious}`);
    if (summary.moderate > 0) console.log(`   🟡 Moderadas: ${summary.moderate}`);
    if (summary.minor > 0) console.log(`   🟢 Menores: ${summary.minor}`);
    
    console.log('\n💡 Consejos para corregir:');
    console.log('   • Revisa los contrastes de color (4.5:1 para texto normal)');
    console.log('   • Asegúrate de que todos los elementos tengan etiquetas apropiadas');
    console.log('   • Verifica que la navegación por teclado funcione correctamente');
    console.log('   • Usa herramientas como Chrome DevTools > Lighthouse > Accessibility');
  }
  
  console.log('\n🛠️  Herramientas recomendadas:');
  console.log('   • Chrome DevTools > Lighthouse');
  console.log('   • axe DevTools extension');
  console.log('   • WAVE Web Accessibility Evaluator');
  console.log('   • Color contrast analyzers');
};

// Ejecutar el análisis
analyzeAccessibility().catch(error => {
  console.error('💥 Error fatal:', error);
  process.exit(1);
});
