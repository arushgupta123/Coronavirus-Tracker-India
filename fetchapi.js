
    function hi(nc) {
        fetch("https://api.covid19india.org/state_district_wise.json").then( (imported_data) => {
            return imported_data.json();
        }).then( (RealData) => {
            console.log(RealData);
            const countryName = RealData.Countries[`${nc}`];
            //
        }).catch( (error) => {
            console.log(error)
        })
    }

