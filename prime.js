function prime(){

    let a =  15
    let flag = 0
     for(let i =2 ;i*i<=a;i++)
     {
        if(a%i ==0)
        {
        flag =1 
        break
        }
     }
     if(flag==1)
     {
       console.log("not prime  ")
     }
     else{
        console.log(" prime ")
     }
    }
    prime()