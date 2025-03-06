document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);

    const votingPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve(`Welcome, John. You can vote.`);
            } else {
                reject(`Oh sorry Doe. You aren't old enough.`);
            }
        }, 4000);
    });

    votingPromise
        .then(message => {
            alert(message);
        })
        .catch(error => {
            alert(error);
        });
});