export async function useFetch(apiUrl) {
  try {
    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}

export async function postDate(apiUrl, date) {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(date)
    })

    if (!response.ok) {
      const errorMessage = await response.text()
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`)
    }
    const data = await response.json()
    alert('Siz bilan tez vaqt ichida boglanishadi!')
  } catch (error) {
    console.error('Error posting data:', error)
  }
}
