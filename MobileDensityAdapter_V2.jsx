/********************************************************
*       MobileDensityAdapter for Photoshop - V2        	*
*                 ------------------                   	*   
*                                                      	*   
* Author:  Javier Bustamante Pérez                     	*   
*                                                      	*
* Web: www.bustazone.com                               	*
*                                                      	*	   
* Purpose:  Starting by a unique image for any density 	*
*   		for Android or IOS, the script converts    	*
*           and sorts the images in separated folders  	*
*			adapting the image to every densities and  	*
*			normalizing the names.          		   	*
*													   	*
*			If you start your UI design in a vectorial 	*
*			program (illustrator, corel,...) taking    	*
*			your screen dimensions in pixels and 	   	*	
*			real dimensions you can	obtain other	   	*	 
*			density in the render image scaling the    	*
*			design with the follow factors			   	*
*                									   	*
*				For Android:                           	*
*					ldpi --> 0.75                      	*
*					mdpi --> 1                         	*
*					hdpi --> 1.5                       	*
*					xhdpi --> 2                        	*
*					xxhdpi --> 3                       	*
*					xxxhdpi --> 4			           	*
*													   	*
*				For IOS:                               	*
*					normal screens --> 1               	*
*					retina screens (@2x) --> 2         	*
*					retina hd screens (@3x) --> 3      	*
*													   	*
* 			It is usefull to obtain a lossless 			*
*			convertions.								*
*                                                      	*	   
* Usage:                                               	*   
*      	1. Copy the script file (.jsx) to photoshop    	*
*		   preset folder in the photoshop instalation  	*
*		   path.                                       	*  
*		2. Open an image in photoshop and click        	*
*		   File-->Scripts-->MobileDensityAdapterV2.    	*
*		3. Select the density of the starting image.   	*
*		4. Be patient (The convertions take time but   	*
*		   not too much)                               	*
*		5. Done!!!                                     	*  
*       *. Aditionally you can create an action and    	*
*		   a batch with the script to convert to many  	*
*		   images automaticaly.                        	*
*													   	*
*				     ENJOY IT!!!					   	*
*                                                      	*
*													   	*
* Changes from V1: 									   	*
*  	-Added functionality for starting image of any     	*
*    density										   	*
*													   	*
********************************************************/


// get a reference to the current (active) document and store it in a variable named "doc"
doc = app.activeDocument;  

// change the color mode to RGB.  Important for resizing GIFs with indexed colors, to get better results
doc.changeMode(ChangeMode.RGB);  

var PNGOptions = new PNGSaveOptions();

history = doc.historyStates.length - 1;

var minus = doc.name.toLowerCase();
var normalized = minus.replace(/[^a-z0-9_.]/g, "_");
var fullName = normalized;
var splitName = fullName.split('.');
var extension = splitName[splitName.length-1];
var nameOnly = fullName.substring(0,(fullName.length-extension.length-1));

var dlg = new Window("dialog{\
	text:'Script Interface',\
	margins:15,\
	Text: StaticText{text: 'What is the density of the original image?',  font: '<system/bold>',},\
	Text: StaticText{text: '(If you do not know, click mdpi button)'},\
	ButtonsGroup: Group{\
		ldpiButton: Button { text: 'ldpi', size: [75,25], alignment:['right', 'center'] }, \
		mdpiButton: Button { text: 'mdpi', size: [75,25], alignment:['right', 'center'] }, \
		hdpiButton: Button { text: 'hdpi', size: [75,25], alignment:['right', 'center'] }, \
		xhdpiButton: Button { text: 'xhdpi', size: [75,25], alignment:['right', 'center'] }, \
		xxhdpiButton: Button { text: 'xxhdpi', size: [75,25], alignment:['right', 'center'] } \
		xxxhdpiButton: Button { text: 'xxxhdpi', size: [75,25], alignment:['right', 'center'] } \
		ios1xButton: Button { text: '@1x', size: [75,25], alignment:['right', 'center'] } \
		ios2xButton: Button { text: '@2x', size: [75,25], alignment:['right', 'center'] } \
		ios3xButton: Button { text: '@3x', size: [75,25], alignment:['right', 'center'] } \
	}\
};");

// arr es un aaray que contiene el factor de conversión de todas las densidades desde todas las densidades
//var arr = [ldpi,mdpi,hdpi,xhdpi,xxhdpi,xxxhdpi,ios1x,ios2x,ios3x]
dlg.ButtonsGroup.ldpiButton.onClick = function() {
	alert("ldpi");
	var arr = [1.0,1.33334,2.0,2.66667,4.0,5.33334,1.33334,2.66667,4.0];
	transformAndRender(arr);
    return dlg.close();
};

dlg.ButtonsGroup.mdpiButton.onClick = function() {
	alert("mdpi");
	var arr = [0.75,1.0,1.5,2.0,3.0,4.0,1.0,2.0,3.0];
	transformAndRender(arr);
  	return dlg.close();
};

dlg.ButtonsGroup.hdpiButton.onClick = function() {
	alert("hdpi");
	var arr = [0.5,0.66667,1.0,1.33334,2.0,2.66667,0.66667,1.33334,2.0];
	transformAndRender(arr);
  	return dlg.close();
};

dlg.ButtonsGroup.xhdpiButton.onClick = function() {
	alert("xhdpi");
	var arr = [0.375,0.5,0.75,1.0,1.5,2.0,0.5,1.0,1.5];
	transformAndRender(arr);
    return dlg.close();
};

dlg.ButtonsGroup.xxhdpiButton.onClick = function() {
	alert("xxhdpi");
	var arr = [0.25,0.33334,0.5,0.66667,1.0,1.33334,0.33334,0.66667,1.0];
	transformAndRender(arr);
    return dlg.close();
};

dlg.ButtonsGroup.xxxhdpiButton.onClick = function() {
	alert("xxxhdpi");
	var arr = [0.1875,0.25,0.375,0.5,0.75,1.0,0.25,0.5,0.75];
	transformAndRender(arr);
    return dlg.close();
};

dlg.ButtonsGroup.ios1xButton.onClick = function() {
	alert("@1x");
	var arr = [0.75,1.0,1.5,2.0,3.0,4.0,1.0,2.0,3.0];
	transformAndRender(arr);
    return dlg.close();
};

dlg.ButtonsGroup.ios2xButton.onClick = function() {
	alert("@2x");
	var arr = [0.375,0.5,0.75,1.0,1.5,2.0,0.5,1.0,1.5];
	transformAndRender(arr);
    return dlg.close();
};

dlg.ButtonsGroup.ios3xButton.onClick = function() {
	alert("@3x");
	var arr = [0.25,0.33334,0.5,0.66667,1.0,1.33334,0.33334,0.66667,1.0];
	transformAndRender(arr);
    return dlg.close();
};

dlg.show();




function transformAndRender(arrayProportions)
{
	//ldpi
	var folder = Folder(doc.path+"/android/drawable-ldpi/");
	if(!folder.exists) folder.create();
	if (arrayProportions[0]!=1)
	{
		doc.resizeImage(UnitValue(doc.width*arrayProportions[0],"px"),UnitValue(doc.height*arrayProportions[0],"px"),null,getResampler(arrayProportions[0]));
	}
	doc.saveAs(File(doc.path+'/android/drawable-ldpi/'+fullName), PNGOptions, true);
	doc.activeHistoryState = doc.historyStates[history]
	app.purge (PurgeTarget.HISTORYCACHES);

	//mdpi e ios normal
	folder = Folder(doc.path+"/android/drawable-mdpi/");
	if(!folder.exists) folder.create();
	if (arrayProportions[1]!=1)
	{
		doc.resizeImage(UnitValue(doc.width*arrayProportions[1],"px"),UnitValue(doc.height*arrayProportions[1],"px"),null,getResampler(arrayProportions[1]));
	}
	doc.saveAs(File(doc.path+'/android/drawable-mdpi/'+fullName), PNGOptions, true);
	doc.activeHistoryState = doc.historyStates[history]
	app.purge (PurgeTarget.HISTORYCACHES);

	//hdpi
	folder = Folder(doc.path+"/android/drawable-hdpi/");
	if(!folder.exists) folder.create();
	if (arrayProportions[2]!=1)
	{
		doc.resizeImage(UnitValue(doc.width*arrayProportions[2],"px"),UnitValue(doc.height*arrayProportions[2],"px"),null,getResampler(arrayProportions[2]));
	}
	doc.saveAs(File(doc.path+'/android/drawable-hdpi/'+fullName), PNGOptions, true);
	doc.activeHistoryState = doc.historyStates[history]
	app.purge (PurgeTarget.HISTORYCACHES);

	//xhdpi
	folder = Folder(doc.path+"/android/drawable-xhdpi/");
	if(!folder.exists) folder.create();
	if (arrayProportions[3]!=1)
	{
		doc.resizeImage(UnitValue(doc.width*arrayProportions[3],"px"),UnitValue(doc.height*arrayProportions[3],"px"),null,getResampler(arrayProportions[3]));
	}
	doc.saveAs(File(doc.path+'/android/drawable-xhdpi/'+fullName), PNGOptions, true);
	doc.activeHistoryState = doc.historyStates[history]
	app.purge (PurgeTarget.HISTORYCACHES);

	//xxhdpi e ios @3x
	folder = Folder(doc.path+"/android/drawable-xxhdpi/");
	if(!folder.exists) folder.create();
	if (arrayProportions[4]!=1)
	{
		doc.resizeImage(UnitValue(doc.width*arrayProportions[4],"px"),UnitValue(doc.height*arrayProportions[4],"px"),null,getResampler(arrayProportions[4]));
	}
	doc.saveAs(File(doc.path+'/android/drawable-xxhdpi/'+fullName), PNGOptions, true);
	doc.activeHistoryState = doc.historyStates[history]
	app.purge (PurgeTarget.HISTORYCACHES);

	//xxxhdpi
	folder = Folder(doc.path+"/android/drawable-xxxhdpi/");
	if(!folder.exists) folder.create();
	if (arrayProportions[5]!=1)
	{
		doc.resizeImage(UnitValue(doc.width*arrayProportions[5],"px"),UnitValue(doc.height*arrayProportions[5],"px"),null,getResampler(arrayProportions[5]));
	}
	doc.saveAs(File(doc.path+'/android/drawable-xxxhdpi/'+fullName), PNGOptions, true);
	doc.activeHistoryState = doc.historyStates[history]
	app.purge (PurgeTarget.HISTORYCACHES);

	//ios normal
	folder = Folder(doc.path+"/ios/@1x/");
	if(!folder.exists) folder.create();
	if (arrayProportions[6]!=1)
	{
		doc.resizeImage(UnitValue(doc.width*arrayProportions[6],"px"),UnitValue(doc.height*arrayProportions[6],"px"),null,getResampler(arrayProportions[6]));
	}
	doc.saveAs(File(doc.path+'/ios/@1x/'+fullName), PNGOptions, true);
	doc.activeHistoryState = doc.historyStates[history]
	app.purge (PurgeTarget.HISTORYCACHES);

	//ios @2x
	folder = Folder(doc.path+"/ios/@2x/");
	if(!folder.exists) folder.create();
	if (arrayProportions[7]!=1)
	{
		doc.resizeImage(UnitValue(doc.width*arrayProportions[7],"px"),UnitValue(doc.height*arrayProportions[7],"px"),null,getResampler(arrayProportions[7]));
	}
	doc.saveAs(File(doc.path+'/ios/@2x/'+nameOnly+'@2x.'+extension), PNGOptions, true);
	doc.activeHistoryState = doc.historyStates[history]
	app.purge (PurgeTarget.HISTORYCACHES);

	//ios @3x
	folder = Folder(doc.path+"/ios/@3x/");
	if(!folder.exists) folder.create();
	if (arrayProportions[8]!=1)
	{
		doc.resizeImage(UnitValue(doc.width*arrayProportions[8],"px"),UnitValue(doc.height*arrayProportions[8],"px"),null,getResampler(arrayProportions[8]));
	}
	doc.saveAs(File(doc.path+'/ios/@3x/'+nameOnly+'@3x.'+extension), PNGOptions, true);
	doc.activeHistoryState = doc.historyStates[history]
	app.purge (PurgeTarget.HISTORYCACHES);

	alert("Done!!!");
}


function getResampler (factor)
{
	if (factor>1)
		return ResampleMethod.BICUBICSMOOTHER;
	else
		return ResampleMethod.BICUBICSHARPER;
}