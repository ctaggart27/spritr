/*!
   
    $.ajax({
      Type: 'POST',
      url: '/sprite/piskel',
      dataType: 'json',
      data: {
        name: name,
        description: description,
        serial: serialized
      },
      success: (result) => {
        window.location.href='/profile/6'
      },
      error: () => {}
    })