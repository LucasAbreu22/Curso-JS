
        function calcular(){
            let txtv = document.getElementById('txtvel')
            let res = document.getElementById('res')
            let vel = Number(txtv.value)

            res.innerHTML = `<p>Sua velocidade é de <strong>${vel}<strong>Km/h</p>`

            if(vel > 60){

                res.innerHTML += `<p>Você está <strong> MULTADO </strong> por excesso de velocidade!</p>`
            }
            res.innerHTML += `<p>Dirija com cinto de segurança</p>`
}