function addData(data){
    let result =""
    result += "<tr>"+
                "<td>"+ data.id +"</td>"+
                "<td>"+ data.name +"</td>"+
                "<td>"+ data.username +"</td>"+
                "<td>"+ data.email +"</td>"+
                "<td>"+ data.address +"</td>"+
                "<td>"+ data.company +"</td>"+
            "</tr>"    
    return result
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => data.forEach(d => {
        let address = [d.address.street, d.address.suite, d.address.city]
        let addr = address.join(", ")
        let body = addData({
                        id: d.id,
                        name: d.name,
                        username: d.username,
                        email: d.email,
                        address: addr,
                        company: d.company.name 
                    }) 
        let tableBody = document.getElementById("table-body")
        tableBody.innerHTML += body

    }))