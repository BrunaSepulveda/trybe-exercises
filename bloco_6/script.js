let estadosBrasilleiros = ['Acre', 
    'Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo',
    'Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará',
    'Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte',
    'Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe',
    'Tocantins'
    ]
const menuEstados = document.getElementById('estado');
   
   for (let index = 0; index< estadosBrasilleiros.length; index += 1) {
        let estado = estadosBrasilleiros[index];
        
        let opcaoEstado = document.createElement('option');
        opcaoEstado.innerText = estado;
        opcaoEstado.value = index;
        menuEstados.appendChild(opcaoEstado)
    };
