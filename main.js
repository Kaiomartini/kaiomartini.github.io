const LinksSocialMedia = {
  github: 'Kaiomartini',
  youtube: 'CaioMartini',
  facebook: 'caio.martini.37',
  instagram: 'caiomartini360',
  twitter: 'CaioMartini'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}

function updadeUserGit() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('userName').innerHTML = data.name
      bio.textContent = data.bio
      userGit.textContent = data.login
      profilePicture.src = data.avatar_url
      linkGit.href = data.html_url
    })
}

changeSocialMediaLinks()
updadeUserGit()
