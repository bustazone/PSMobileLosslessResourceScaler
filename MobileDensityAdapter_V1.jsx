/*******************************************************
*         MobileDensityAdapter for Photoshop           *
*                 ------------------                   *   
*                                                      *   
* Author:  Javier Bustamante Pérez                     *   
*                                                      *
* Web: www.bustazone.com                               *
*                                                      *   
* Purpose:  Start by a unique image for mdpi density   *
*   		(Android) or for normal screen (IOS)       *
*			the script convert and sort in folders     *
*			adapting the image for every densities     *
*           and normalizing the names.                 *
*                                                      *
*				For Android:                           *
*					ldpi                               *
*					mdpi                               *
*					hdpi                               *
*					xhdpi                              *
*					xxhdpi                             *
*					xxxhdpi                            *
*													   *
*				For IOS:                               *
*					normal screens                     *
*					retina screens (@2x)               *
*					retina hd screens (@3x)            *
*                                                      *   
* Usage:                                               *   
*      	1. Copy the script file (.jsx) to photoshop    *
*		   preset folder in the photoshop instalation  *
*		   path.                                       *  
*		2. Open an image in photoshop and click        *
*		   File-->Scripts-->MobileDensityAdapter.      *
*		3. Done!!!                                     *  
*       *. Aditionally you can create an action and    *
*		   a batch with the script to convert to many  *
*		   images automaticaly.                        *
*													   *
*				     ENJOY IT!!!					   *
*													   *
*******************************************************/


// get a reference to the current (active) document and store it in a variable named "doc"
doc = app.activeDocument;  

// change the color mode to RGB.  Important for resizing GIFs with indexed colors, to get better results
doc.changeMode(ChangeMode.RGB);  

var PNGOptions = new PNGSaveOptions();

history = doc.historyStates.length - 1;

var minus = doc.name.toLowerCase();
var normalized = h.replace(/[^a-z0-9_.]/g, "_");
var fullName = normalized;
var splitName = fullName.split('.');
var extension = splitName[splitName.length-1];
var nameOnly = fullName.substring(0,(fullName.length-extension.length-1));

var k = "WWw_fR.DD&/*á´dfffD";

alert(k);
k.replace(/[a-z0-9]/g, "_");
alert(k);
//alert(fullName);
//alert(splitName);
//alert(extension);
//alert(nameOnly);


//ldpi
var folder = Folder(doc.path+"/android/drawable-ldpi/");
if(!folder.exists) folder.create();
doc.resizeImage(UnitValue(doc.width*0.75,"px"),UnitValue(doc.height*0.75,"px"),null,ResampleMethod.BICUBICSHARPER);
doc.saveAs(File(doc.path+'/android/drawable-ldpi/'+fullName), PNGOptions, true);
doc.activeHistoryState = doc.historyStates[history]
app.purge (PurgeTarget.HISTORYCACHES);

//mdpi e ios normal
folder = Folder(doc.path+"/android/drawable-mdpi/");
if(!folder.exists) folder.create();
folder = Folder(doc.path+"/ios/@1x/");
if(!folder.exists) folder.create();
doc.saveAs(File(doc.path+'/android/drawable-mdpi/'+fullName), PNGOptions, true);
doc.saveAs(File(doc.path+'/ios/@1x/'+fullName), PNGOptions, true);

//hdpi
folder = Folder(doc.path+"/android/drawable-hdpi/");
if(!folder.exists) folder.create();
doc.resizeImage(UnitValue(doc.width*1.5,"px"),UnitValue(doc.height*1.5,"px"),null,ResampleMethod.BICUBICSMOOTHER);
doc.saveAs(File(doc.path+'/android/drawable-hdpi/'+fullName), PNGOptions, true);
doc.activeHistoryState = doc.historyStates[history]
app.purge (PurgeTarget.HISTORYCACHES);

//xhdpi e ios @2x
folder = Folder(doc.path+"/android/drawable-xhdpi/");
if(!folder.exists) folder.create();
folder = Folder(doc.path+"/ios/@2x/");
if(!folder.exists) folder.create();
doc.resizeImage(UnitValue(doc.width*2.0,"px"),UnitValue(doc.height*2.0,"px"),null,ResampleMethod.BICUBICSMOOTHER);
doc.saveAs(File(doc.path+'/android/drawable-xhdpi/'+fullName), PNGOptions, true);
doc.saveAs(File(doc.path+'/ios/@2x/'+nameOnly+'@2x.'+extension), PNGOptions, true);
doc.activeHistoryState = doc.historyStates[history]
app.purge (PurgeTarget.HISTORYCACHES);

//xxhdpi e ios @3x
folder = Folder(doc.path+"/android/drawable-xxhdpi/");
if(!folder.exists) folder.create();
folder = Folder(doc.path+"/ios/@3x/");
if(!folder.exists) folder.create();
doc.resizeImage(UnitValue(doc.width*3.0,"px"),UnitValue(doc.height*3.0,"px"),null,ResampleMethod.BICUBICSMOOTHER);
doc.saveAs(File(doc.path+'/android/drawable-xxhdpi/'+fullName), PNGOptions, true);
doc.saveAs(File(doc.path+'/ios/@3x/'+nameOnly+'@3x.'+extension), PNGOptions, true);
doc.activeHistoryState = doc.historyStates[history]
app.purge (PurgeTarget.HISTORYCACHES);

//xxxhdpi
folder = Folder(doc.path+"/android/drawable-xxxhdpi/");
if(!folder.exists) folder.create();
doc.resizeImage(UnitValue(doc.width*4.0,"px"),UnitValue(doc.height*4.0,"px"),null,ResampleMethod.BICUBICSMOOTHER);
doc.saveAs(File(doc.path+'/android/drawable-xxxhdpi/'+fullName), PNGOptions, true);
doc.activeHistoryState = doc.historyStates[history]
app.purge (PurgeTarget.HISTORYCACHES);

alert("Done!!!");