(function () {
  var sims = document.querySelectorAll('[data-gpr-sim]');
  sims.forEach(function (sim) {
    var slider = sim.parentElement.querySelector('.sim-slider');
    var veil = sim.querySelector('.sim-veil');
    var beam = sim.querySelector('.sim-beam');
    var callout = sim.querySelector('.sim-callout');
    var distance = sim.querySelector('.sim-distance');
    var markers = sim.querySelectorAll('.sim-marker');
    var defaultLabel = callout ? callout.textContent : '';
    var eduText = sim.querySelector('.sim-edu-text');
    var eduDefault = eduText ? eduText.dataset.default : '';
    var eduStages = [
      { min: 0, max: 15, text: 'La antena emite pulsos de energía electromagnética hacia el subsuelo y registra el tiempo que demora en volver cada eco.' },
      { min: 15, max: 35, text: 'Cuando la onda choca con un material distinto al suelo circundante (un ducto, una roca, un vacío), parte de la energía rebota hacia la antena.' },
      { min: 35, max: 55, text: 'La forma de hipérbola aparece porque la antena detecta el mismo objeto desde varias posiciones: antes, justo encima y después de pasar sobre él.' },
      { min: 55, max: 75, text: 'El tiempo que tarda en volver la señal, junto con la velocidad de propagación del suelo, permite estimar la profundidad real del objetivo.' },
      { min: 75, max: 100, text: 'Una curva nítida y simétrica suele ser un objetivo real. Si se ve borrosa, irregular o mezclada con el fondo, probablemente es ruido o relleno.' }
    ];

    function update(value) {
      veil.style.width = (100 - value) + '%';
      beam.style.left = value + '%';
      if (distance) {
        distance.textContent = ((value / 100) * 10).toFixed(1);
      }

      if (eduText) {
        var stage = eduStages.find(function (s) {
          return value >= s.min && value <= s.max;
        });
        eduText.textContent = stage ? stage.text : eduDefault;
      }

      var activeLabel = '';
      markers.forEach(function (marker) {
        var trigger = parseFloat(marker.dataset.trigger);
        if (value >= trigger) {
          marker.classList.add('is-found');
        }
        if (value >= trigger && value <= trigger + 9) {
          activeLabel = marker.dataset.label || defaultLabel;
        }
      });

      if (activeLabel) {
        callout.textContent = activeLabel;
        callout.classList.add('is-active');
      } else {
        callout.classList.remove('is-active');
      }
    }

    slider.addEventListener('input', function () {
      update(parseFloat(slider.value));
    });
    update(parseFloat(slider.value));
  });

  var tabs = document.querySelectorAll('.sim-tab');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var edu = tab.closest('.sim-edu');
      var name = tab.dataset.tab;
      edu.querySelectorAll('.sim-tab').forEach(function (t) {
        t.classList.toggle('is-active', t === tab);
        t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
      });
      edu.querySelectorAll('.sim-tab-panel').forEach(function (panel) {
        panel.classList.toggle('is-active', panel.dataset.tabPanel === name);
      });
    });
  });

  var quizOptions = document.querySelectorAll('.quiz-option');
  quizOptions.forEach(function (option) {
    option.addEventListener('click', function () {
      var question = option.closest('.quiz-question');
      var options = question.querySelectorAll('.quiz-option');
      var feedback = question.querySelector('.quiz-feedback');
      options.forEach(function (opt) {
        opt.disabled = true;
        if (opt.dataset.correct === 'true') {
          opt.classList.add('is-correct');
        } else {
          opt.classList.add('is-wrong');
        }
      });
      if (feedback) {
        feedback.classList.add('is-visible');
      }
    });
  });
})();
