
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.alt = profileData.name

    let name = document.getElementById('profile.name')
    name.innerText = profileData.name

    document.getElementById('profile.job').innerHTML = profileData.job
    document.getElementById('profile.location').innerHTML = profileData.location
    document.getElementById('profile.phone').innerHTML = profileData.phone
    document.getElementById('profile.email').innerHTML = profileData.email

}



(async () => {

    const profileData = await fetchProfileData();
    updateProfileInfo(profileData)
})()