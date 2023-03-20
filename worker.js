addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  try {
    // Fetch a random cat image from the API
    const apiUrl = 'https://api.thecatapi.com/v1/images/search'
    const response = await fetch(apiUrl)
    const data = await response.json()

    // Get the image URL from the response
    const imageUrl = data[0].url

    // Fetch the image from the URL
    const imageResponse = await fetch(imageUrl)

    // Create a new response with the image and appropriate headers
    const headers = new Headers({
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=86400',
    })
    const imageBody = await imageResponse.arrayBuffer()
    const imageResponseInit = {
      status: imageResponse.status,
      statusText: imageResponse.statusText,
      headers: headers,
    }
    const image = new Response(imageBody, imageResponseInit)

    // Return the image response
    return image
  } catch (err) {
    // Handle errors
    console.error(err)
    return new Response('Error fetching cat image', { status: 500 })
  }
}
