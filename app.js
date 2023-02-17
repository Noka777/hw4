var array = ['name','john','lastname','black','age','23'];
var result = {}

for(var i = 0; i <= array.length-1;i++){
    if(array[i] === "name"){
     result.name = ''
    }else if (array[i]=== 'john'){
        result.name ='john'
    }else  if(array[i]==='lastname'){
        result.lastname = ''
    }
    else  if(array[i]==='black'){
        result.lastname='black'
    }else if (array[i]==='age'){
        result.age =''
    }else if (array[i]==='23'){
        result.age = '23'
    }
}
console.log(result)
