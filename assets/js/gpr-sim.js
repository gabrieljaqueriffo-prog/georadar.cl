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

    function update(value) {
      veil.style.width = (100 - value) + '%';
      beam.style.left = value + '%';
      if (distance) {
        distance.textContent = ((value / 100) * 10).toFixed(1);
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
})();
