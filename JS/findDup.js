 //There is an array from 1 to N with one duplicated element. Find this element
        //took about 5 mins

        var array = [11, 5, 44, 8, 1, 3, 55, 76, 90, 23, 65, 87, 56, 12, 23];
        

        var msg = findDup(array);
        cosole.log(msg);
        //alert(msg);

        function findDup(array){
            var length = array.length;

            for(var i = 0; i < length; i++){
                for(j = i + 1; j < length; j++){
                    if (array[i] === array[j]) return array[i];
                }
            }
            return "didn`t found duplication";
        }