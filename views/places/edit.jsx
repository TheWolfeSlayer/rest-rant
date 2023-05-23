const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method='POST' action='/places/${data.place.id}?_method=PUT'>
                <div className='form-group'>
                    <label htmlFor='name'>Place Name</label>
                    <input className='form-control' id='name' name='name' value={data.place.name} required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="pic">Place Picture</label>
                    <input className='form-control' name="pic" id="pic" value={data.place.pic}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="city">Place City</label>
                    <input className='form-control' name="city" id="city" value={data.place.city}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="state">Place State</label>
                    <input className='form-control' name="state" id="state" value={data.place.state}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="cuisines">Place cuisines</label>
                    <input className='form-control' name="cuisines" id="cuisines" value={data.place.cuisines} required/>
                </div >
                <div className='form-group col-sm-4'>
                    <label htmlFor="founded">Founded</label>
                    <input className='form-control'
                    id='founded'
                    name='founded'
                    value={data.place.founded} 
                    />
                </div>
                <input className='btn btn-primary' type="submit" value="Add Place" />
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form
