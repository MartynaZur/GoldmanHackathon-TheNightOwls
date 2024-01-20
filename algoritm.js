
function checkStress(sleep, sport, work, headache, lacrimation, result)
{
    if(lacrimation==true)
    {
        if(headache=true){
            result="You cannot use VR today, but take a breake."
        }
        else{
            if(sleep<5)
            {
                result="You cannot use VR today, but take a breake."
            }if(sleep>5||sleep<8)
            {
                if(sport>30)
                {
                    if(work<4)
                    {
                        result="If you want, you can use VR for 20 min."
                    }else if(work>4)
                    {
                        result="You could use VR for 15 min, but better will be try to rest without technology."
                    }
                }else{
                    result="It will be better for you not use a VR today."
                }
            }
        }
    }else{
        if(headache=true){
            result="You cannot use VR today, but take a breake."
        }

    }
    return result
}
