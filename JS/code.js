//------------------------------------------------------------------------------first task---------------------------------------------------------
//----------------------------------------------------first variant of task 1 (took about 50 minutes with interruptions)
function firstTask1()
{
		//var string =  "abcdefghijklmnopqrstuvwxyz";		//here i create string to transform
		var string = document.getElementById("string1").value;
		//alert(typeof(string));
		//var string = string1;
		var array = [];					// it`s an array for the string
		var yarra = [];					// it`s an array for reversed string
	
		for ( var i = 0; i < string.length; i++)			//now i fill up array with symbols
			{					// *later i`ll put code that can be interpreted in ECMAScript5 standart
				array[i] = string.charAt(i);		// to treat string as read only array and refer to symbols by index
			};					// for example string[i]
	
		//alert(array);					//show intermediate result
	
		var totalLength = array.length;			//save length of the array in some variable
	
		for ( var i = 0; i < totalLength; i++)			//reverse an array in a rude way that remove elements from source
			{					//array
				var last = array.pop();
		//		alert (i+" "+last);
				yarra.push(last);
			}
	
		//alert (yarra);					//put reversed result on a screen
				
	
		var reversedString = "";				//variable reversed string to be put in
	
		for ( i = 0 ; i < totalLength ; i++)
			{
				reversedString += yarra[i];
			}
	
		//alert (string+"\nvice verca is\n"+reversedString);		//displaying source and reversed string
		output1.innerHTML = string + " vice verca is " + reversedString;
}



//-----------------------------------------------second variant of task 1 (about 3 mins with copipasting testing and correcting error)
function firstTask2()
{	
	//var string =  "awayanan";
	var string = document.getElementById("string2").value;			
	var array = [];					
	var yarra = [];					

	for ( var i = 0; i < string.length; i++)			
		{					
			array[i] = string.charAt(i);		
		};					

	//alert(array);					

	var totalLength = array.length;			

	for ( var i = 0; i < totalLength; i++)			
		{					// only difference is in this for-cycle
			var last = array[totalLength-1-i];	//here i don`t empty the source array
	//		alert (i+" "+last);
			yarra[i] = last;
		}

	//alert (yarra);					
			

	var reversedString = "";				

	for ( i = 0 ; i < totalLength ; i++)
		{
			reversedString += yarra[i];
		}

	//alert (string+"\nvice verca is\n"+reversedString);
	output2.innerHTML = string + " vice verca is " + reversedString;
}
//-----------------------------------------------third variant of task 1 (about 2 mins with testing and correcting error)
function firstTask3()
{
// here i treat string like read only array
	//var string = "awayanan";
	var string = document.getElementById("string3").value;
	var reversedString = "";
	for ( var i = 1; i <= string.length; i++)
		{
			reversedString += string[string.length - i];
		}
	// alert (string + "\nvice verca is\n"+ reversedString);
	output3.innerHTML = string + " vice verca is " + reversedString;
}
//-----------------------------------------------fourth variant of task 1 (doesn`t really work yet)
function firstTask4()
{
// here i treat string like read only array
	//var string = "awayanan";
	var string = document.getElementById("string4").value;
	var arrayOfString = string.split("");
	var reversedString = arrayOfString.reverse();
	
	// alert (string + "\nvice verca is\n"+ reversedString.toString());
	output4.innerHTML = string + " vice verca is " + reversedString;
}
//------------------------------------------------------------second task------------------------------------------------------------------------
//
// algorithm of calculation is: we look at string and see first charachter
// if it is dash we continue looking. when it is differs then we looking for the
// next dash and increase counter. then iterate till the end of the string
// and for some unknown reason i used word dash instead of space
//--------------------------------------first variant ( took about hour because of nonaccurate algorythm, please show me another approach)
function secondTask1()
{	
	//var stringOfWords = "quit   lets count number of words in this short string with long distance of                           dashes. it has to be twenty";
	// 
	var stringOfWords = document.getElementById("string5").value;    
	var counter = 0;
	var flagWasWord = 0;
	//alert(stringOfWords[stringOfWords.length+1]);
	for (var i = 0; i < stringOfWords.length; i ++)
		{
			var char = stringOfWords[i];
			//alert(char);
			if (char == " " && flagWasWord == 1)
				{counter++; 
				//alert ("string[i] = " + char + "\;\n" + "flagWasWord = " + flagWasWord + "\;\n" + "counter = " + counter + "\.\n");
				flagWasWord = 0;
				};
			if (char !== " " && flagWasWord == 0) flagWasWord = 1;
			if (i == (stringOfWords.length - 1) && flagWasWord == 1) counter++;
		}
	var ending = "s";	
	switch (counter)
		{
			case 0:
				ending = "s";
				counter = "no";
				break;
			case 1:
				ending = "";
				break;
		}	
	// alert("There are " + counter + " word" + ending + " in string\n" + "\"" + stringOfWords + "\"");
	output5.innerHTML = "There are " + counter + " word" + ending + " in string " + "\"" + stringOfWords + "\"";
}
//--------------------------------------second variant ( dosen`t work properly yet)
function secondTask2()
{
	//var stringOfWords = "quit   lets count number of words in this short string with long distance of                           dashes. it has to be twenty";
	var stringOfWords = document.getElementById("string6").value;
	//var regExp = /(\u0020*)/;
	//alert("reg" + regExp + "Exp\n");
	var arrayOfWords = stringOfWords.split(/ +/);
	// alert("There are " + arrayOfWords.length + " words");
	var ending = "s";
	var length = arrayOfWords.length;
	switch (length)
		{
			case 0:
				ending = "s";
				counter = "no";
				break;
			case 1:
				ending = "";
				break;
		}
	output6.innerHTML = "There are " + length + " word" + ending + " in string " + "\"" + stringOfWords + "\"";
}	
//----------------------------------------------------------------third task------------------------------------------------------------------------

// i use same approach as in second task
// and for some unknown reason i used word dash instead of space
//--------------------------------------first and only variant ( took about hour because of hurrying)
function thirdTask1()
{
	//var stringToCaps = "brown    dog runs away anyway";
	var stringToCaps = document.getElementById("string7").value;
	var capitalised = "";
		
	var flagWasDash = 1;
	for (var i = 0; i < stringToCaps.length; i ++)
		{
			var char = stringToCaps[i];
			
				if (char == " ")
				{
				flagWasDash = 1;
				capitalised += stringToCaps[i];
				};
				if ((char !== " ") && (flagWasDash == 0))
				{
				capitalised += stringToCaps[i];
				flagWasDash = 0;
				};

				if ((char !== " ") && (flagWasDash == 1))
				{
				capitalised += stringToCaps[i].toUpperCase();
				flagWasDash = 0;
				};
							
		}
	// alert(stringToCaps + " " + capitalised);
	output7.innerHTML = "String with capital letters is " + capitalised;
}	
