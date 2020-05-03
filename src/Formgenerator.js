import React from 'react';

export const Formgenerator = (props) => {

  const currentForm = props.form.pageProperties.FORM;

  return (
    <form>
      {currentForm.fields && currentForm.fields.map((field, index) => (
        <div>
        <label key={index}>
          {field.name}
          <input type={field.type} id={field}/>
        </label>
        </div>
        )
      )}
    </form>
  )
}


