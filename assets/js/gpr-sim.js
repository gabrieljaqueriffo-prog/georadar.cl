(function () {
  var sims = document.querySelectorAll('[data-gpr-sim]');
  sims.forEach(function (sim) {
    var slider = sim.parentElement.querySelector('.sim-slider');
    var clipRect = sim.querySelector('.sim-clip-rect');
    var antenna = sim.querySelector('.sim-antenna');
    var callout = sim.querySelector('.sim-callout');
    var width = 600;
    var targetStart = parseFloat(sim.dataset.targetStart || '55');
    var targetEnd = parseFloat(sim.dataset.targetEnd || '72');

    function update(value) {
      var x = (value / 100) * width;
      clipRect.setAttribute('width', x);
      antenna.setAttribute('x1', x);
      antenna.setAttribute('x2', x);
      if (value >= targetStart && value <= targetEnd + 8) {
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
})();
