const $searchForm = $("form");




$searchForm.on("submit", event => {
    event.preventDefault();

    //generate data from the target object
    const formData = new FormData(event.target);

    //get the value from the generated data where the name value is "pokemon" (on the form)
    const pokemon = formData.get("pokemon").toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    
    
    const $screen = $(".screen");
    const $result = $(".result");
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            $screen.html(
                `<img src=${data.sprites.front_default} alt=${data.name}>`
            );
            $result.html(`
                <div>
                    <b>name: </b> ${data.name}
                </div>

                <div>
                    <b>id: </b> ${data.id}
                </div>

                <div>
                    <b>weight: </b> ${data.weight}
                </div>

                <div>
                    <b>type: </b> ${data.types.map(v => v.type.name)}
                </div>
            `)
        })
});