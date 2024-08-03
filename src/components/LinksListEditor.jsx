import React from 'react'

//handle the form submission
const handleSubmit = (e) => {
    
    //read the form data
    const name = document.getElementById('link-name').value
    const url = document.getElementById('link-url').value
    const logo = document.getElementById('link-logo').value


  //add the link to the list of links
    const link = {url, name, logo}
    const links = JSON.parse(localStorage.getItem('links')) || []
    links.push(link)
    console.log(links)
    localStorage.setItem('links', JSON.stringify(links))

    //reload the page
    // window.location.reload()

}

const LinksListEditor = () => {
  return (

    <form action="submit">
        <label htmlFor="link-name">Name:</label>
        <input type="text" id="link-name" name="link-name" required/>
        <label htmlFor="link-url">Link URL:</label>
        <input type="text" id="link-url" name="link-url" required/>
        <label htmlFor="link-logo">Link Image:</label>
        <input type="text" id="link-logo" name="link-logo" required/>
        <button type="submit" onClick={handleSubmit}>Add Link</button>
    </form>
  )
}

export default LinksListEditor