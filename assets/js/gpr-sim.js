(function () {
  var sims = document.querySelectorAll('[data-gpr-sim]');
  sims.forEach(function (sim) {
    var slider = sim.parentElement.querySelector('.sim-slider');
    var veil = sim.querySelector('.sim-veil');
    var antenna = sim.querySelector('.sim-antenna');
    var callout = sim.querySelector('.sim-callout');
    var distance = sim.querySelector('.sim-distance');
    var targetStart = parseFloat(sim.dataset.targetStart || '55');
    var targetEnd = parseFloat(sim.dataset.targetEnd || '72');

    function update(value) {
      veil.style.width = (100 - value) + '%';
      antenna.style.left = value + '%';
      if (distance) {
        distance.textContent = ((value / 100) * 10).toFixed(1);
      }
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
