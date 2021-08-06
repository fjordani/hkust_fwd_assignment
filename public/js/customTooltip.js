const button = document.querySelector('#btnTooltip');
    const tooltip = document.querySelector('#tooltipReservetb');

    const popperInstance = Popper.createPopper(button, tooltip, {
      modifiers: [{
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      }, ],
    })

    function show() {
      tooltip.setAttribute('data-show', '');
      // We need to tell Popper to update the tooltip position
      // after we show the tooltip, otherwise it will be incorrect
      console.log(tooltip);
      popperInstance.update();
    }

    function hide() {
      tooltip.removeAttribute('data-show');
      console.log(tooltip);
    }

    const showEvents = ['mouseenter', 'focus'];
    const hideEvents = ['mouseleave', 'blur'];

    showEvents.forEach(event => {
      button.addEventListener(event, show);
    });

    hideEvents.forEach(event => {
      button.addEventListener(event, hide);
    });