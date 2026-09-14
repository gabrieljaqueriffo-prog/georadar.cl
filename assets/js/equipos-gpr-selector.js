(function () {
  var selector = document.querySelector('[data-equipment-selector]');
  if (!selector) return;

  var selections = { application: '', scope: '', output: '' };
  var buttons = selector.querySelectorAll('[data-choice]');
  var result = selector.querySelector('[data-equipment-result]');
  var resultPlaceholder = selector.querySelector('[data-result-placeholder]');
  var resultContent = selector.querySelector('[data-result-content]');
  var resultProgress = selector.querySelector('[data-result-progress]');
  var resultSteps = selector.querySelectorAll('[data-result-step]');
  var context = selector.querySelector('[data-result-context]');
  var title = selector.querySelector('[data-result-title]');
  var copy = selector.querySelector('[data-result-copy]');
  var benefit = selector.querySelector('[data-result-benefit]');
  var check = selector.querySelector('[data-result-check]');
  var cta = selector.querySelector('[data-result-cta]');

  var solutions = {
    concrete: {
      title: 'C-thrue XS o C-thrue',
      copy: 'Ruta para inspección localizada de hormigón cuando se necesita revisar armaduras, ductos, vacíos u otros contrastes cercanos a la superficie.',
      benefit: 'Lectura de detalle, visualización B-scan y C-scan, y marcado de hallazgos según configuración.',
      check: 'Espesor, densidad de armadura, humedad, acceso a la superficie y alcance requerido.'
    },
    utilities: {
      title: 'DS2000, Opera XR o DS4000',
      copy: 'Ruta para detección de servicios enterrados y trazados que requieren avanzar desde la lectura en terreno hacia referencias espaciales y planos.',
      benefit: 'Doble frecuencia, posicionamiento y flujos de adquisición y procesamiento según plataforma.',
      check: 'Material de la red, señal disponible, conductividad, interferencias, geometría y antecedentes existentes.'
    },
    coverage: {
      title: 'Chaser XR o Stream DP',
      copy: 'Ruta para corredores, grillas y superficies donde la cobertura, la repetibilidad y el procesamiento espacial influyen en la decisión.',
      benefit: 'Canales, posicionamiento y opciones de tomografía o procesamiento 3D según la plataforma seleccionada.',
      check: 'Extensión real, superficie de avance, logística, precisión de posicionamiento y formato de entrega esperado.'
    }
  };

  function labelFor(choice, value) {
    var item = selector.querySelector('[data-choice="' + choice + '"][data-value="' + value + '"] strong');
    return item ? item.textContent : '';
  }

  function getSolution() {
    var solution = solutions[selections.application];
    if (!solution) return null;

    if (selections.application === 'utilities' && (selections.scope === 'area' || selections.output === 'model')) {
      return {
        title: 'Stream DP con revisión de trazado',
        copy: 'Para redes soterradas en áreas extensas donde la cobertura repetitiva y la tomografía pueden aportar una lectura espacial más amplia.',
        benefit: 'Arreglo multicanal, cobertura de grilla y procesamiento orientado a resultados espaciales.',
        check: 'Acceso continuo, superficie de avance, posición, condiciones del terreno y diseño de cobertura.'
      };
    }

    if (selections.application === 'coverage' && selections.scope === 'corridor' && selections.output !== 'model') {
      return {
        title: 'Chaser XR',
        copy: 'Para recorridos donde se necesita una plataforma de dos canales, rango amplio de referencia y opciones de posicionamiento.',
        benefit: 'Dos canales, rango de inspección declarado de 80 a 1500 MHz y GNSS, GPS o TPS externo.',
        check: 'Objetivo de lectura, frecuencia adecuada, geometría de recorrido y condiciones de señal del sitio.'
      };
    }

    if (selections.application === 'concrete' && selections.scope === 'point') {
      return {
        title: 'C-thrue XS',
        copy: 'Para inspección compacta de hormigón en sectores localizados, donde el acceso y la maniobrabilidad forman parte de la decisión.',
        benefit: 'Referencia de 2 GHz, encoder integrado y hasta 14 scans/cm según ficha de fabricante.',
        check: 'Condición del hormigón, mallas, profundidad del objetivo y necesidad de visualización o marcado.'
      };
    }

    return solution;
  }

  function selectedCount() {
    return Object.keys(selections).filter(function (key) {
      return Boolean(selections[key]);
    }).length;
  }

  function updatePlaceholder() {
    var count = selectedCount();
    resultProgress.textContent = count;
    resultSteps.forEach(function (step) {
      var key = step.getAttribute('data-result-step');
      step.classList.toggle('is-complete', Boolean(selections[key]));
    });
  }

  function updateResult(shouldReveal) {
    var complete = selections.application && selections.scope && selections.output;
    updatePlaceholder();

    if (!complete) {
      resultPlaceholder.hidden = false;
      resultContent.hidden = true;
      return;
    }

    var solution = getSolution();
    var selectedContext = [
      labelFor('application', selections.application),
      labelFor('scope', selections.scope),
      labelFor('output', selections.output)
    ].join(' · ');
    var message = 'Hola, evalué una configuración GPR en GeoRadar.cl. Mi ruta inicial fue: ' + selectedContext + '. Quiero conversar sobre ' + solution.title + ' para mi operación.';

    context.textContent = selectedContext;
    title.textContent = solution.title;
    copy.textContent = solution.copy;
    benefit.textContent = solution.benefit;
    check.textContent = solution.check;
    cta.href = 'https://wa.me/56975909836?text=' + encodeURIComponent(message);
    resultPlaceholder.hidden = true;
    resultContent.hidden = false;

    if (shouldReveal) {
      result.scrollIntoView({ behavior: 'smooth', block: 'start' });
      result.focus({ preventScroll: true });
    }
  }

  function choose(choice, value, shouldReveal) {
    selections[choice] = value;
    selector.querySelectorAll('[data-choice="' + choice + '"]').forEach(function (item) {
      var active = item.getAttribute('data-value') === value;
      item.classList.toggle('is-selected', active);
      item.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    updateResult(shouldReveal);
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var choice = button.getAttribute('data-choice');
      var value = button.getAttribute('data-value');
      choose(choice, value, true);
    });
  });

  document.querySelectorAll('[data-equipment-preset]').forEach(function (presetButton) {
    presetButton.addEventListener('click', function () {
      var preset = presetButton.getAttribute('data-equipment-preset').split(',');
      choose('application', preset[0], false);
      choose('scope', preset[1], false);
      choose('output', preset[2], false);
      selector.scrollIntoView({ behavior: 'smooth', block: 'start' });
      result.focus({ preventScroll: true });
    });
  });

  updateResult(false);
})();
