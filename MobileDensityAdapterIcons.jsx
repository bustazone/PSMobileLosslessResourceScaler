
  
#target Photoshop  
  
app.bringToFront;  
  
for (var i = 0; i<app.documents.length; i++)
{
	alert(app.documents[i].name);	
}


var inFolder = Folder.selectDialog("Please select folder to process");  
if(inFolder != null){  
	var fileList = inFolder.getFiles(/\.(eps)$/i);  
	//var outfolder = new Folder(decodeURI(inFolder) + "/Processed");  
	//if (outfolder.exists == false) outfolder.create();  
	for(var a = 0 ;a < fileList.length; a++){  

		var activeDocument;
		if(fileList[a] instanceof File){  

			//Prepare common file settings
			var doc1 = open(fileList[a]);

			var epsOriginalWidth = doc1.width.as('px');
			var epsOriginalHeight = doc1.height.as('px');

			var docPath = doc1.path;
			var minus = doc1.name.toLowerCase();
			var normalized = minus.replace(/[^a-z0-9_.]/g, "_");
			var fullName = normalized;
			var splitName = fullName.split('.');
			var extension = splitName[splitName.length-1];
			var nameOnly = fullName.substring(0,(fullName.length-extension.length-1)); 

			doc1.close(SaveOptions.DONOTSAVECHANGES);

			//ldpi
			var folder = Folder(docPath+"/iOSIcons/");
			if(!folder.exists) folder.create();

			var epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 29*1, 'px' );
			epsOpts.height = new UnitValue( 29*1, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_iphone_29.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES); 

			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 29*2, 'px' );
			epsOpts.height = new UnitValue( 29*2, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_iphone_29@2x.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES);   

			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 29*3, 'px' );
			epsOpts.height = new UnitValue( 29*3, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_iphone_29@3x.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES);   
			

		
	
			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 40*2, 'px' );
			epsOpts.height = new UnitValue( 40*2, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_iphone_40@2x.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES);   

			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 40*3, 'px' );
			epsOpts.height = new UnitValue( 40*3, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_iphone_40@3x.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES);  





			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 57*1, 'px' );
			epsOpts.height = new UnitValue( 57*1, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_iphone_57.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES); 

			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 57*2, 'px' );
			epsOpts.height = new UnitValue( 57*2, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_iphone_57@2x.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES);   





			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 60*2, 'px' );
			epsOpts.height = new UnitValue( 60*2, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_iphone_60@2x.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES);   

			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 60*3, 'px' );
			epsOpts.height = new UnitValue( 60*3, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_iphone_60@3x.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES);  		





			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 29*1, 'px' );
			epsOpts.height = new UnitValue( 29*1, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_ipad_29.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES); 

			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 29*2, 'px' );
			epsOpts.height = new UnitValue( 29*2, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_ipad_29@2x.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES);  






			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 40*1, 'px' );
			epsOpts.height = new UnitValue( 40*1, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_ipad_40.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES); 

			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 40*2, 'px' );
			epsOpts.height = new UnitValue( 40*2, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_ipad_40@2x.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES); 






			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 50*1, 'px' );
			epsOpts.height = new UnitValue( 50*1, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_ipad_50.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES); 

			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 50*2, 'px' );
			epsOpts.height = new UnitValue( 50*2, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_ipad_50@2x.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES); 






			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 72*1, 'px' );
			epsOpts.height = new UnitValue( 72*1, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_ipad_72.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES); 

			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 72*2, 'px' );
			epsOpts.height = new UnitValue( 72*2, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_ipad_72@2x.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES); 






			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 76*1, 'px' );
			epsOpts.height = new UnitValue( 76*1, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_ipad_76.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES); 

			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 76*2, 'px' );
			epsOpts.height = new UnitValue( 76*2, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/iOSIcons/"+nameOnly+'_ipad_76@2x.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES); 







			var folder = Folder(docPath+"/androidIcons/mipmap-ldpi/");
			if(!folder.exists) folder.create();
			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 48*0.75, 'px' );
			epsOpts.height = new UnitValue( 48*0.75, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/androidIcons/mipmap-ldpi/"+nameOnly+'.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES); 

			var folder = Folder(docPath+"/androidIcons/mipmap-mdpi/");
			if(!folder.exists) folder.create();
			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 48*1, 'px' );
			epsOpts.height = new UnitValue( 48*1, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/androidIcons/mipmap-mdpi/"+nameOnly+'.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES); 

			var folder = Folder(docPath+"/androidIcons/mipmap-hdpi/");
			if(!folder.exists) folder.create();
			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 48*1.5, 'px' );
			epsOpts.height = new UnitValue( 48*1.5, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/androidIcons/mipmap-hdpi/"+nameOnly+'.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES); 

			var folder = Folder(docPath+"/androidIcons/mipmap-xhdpi/");
			if(!folder.exists) folder.create();
			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 48*2.0, 'px' );
			epsOpts.height = new UnitValue( 48*2.0, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/androidIcons/mipmap-xhdpi/"+nameOnly+'.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES); 

			var folder = Folder(docPath+"/androidIcons/mipmap-xxhdpi/");
			if(!folder.exists) folder.create();
			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 48*3.0, 'px' );
			epsOpts.height = new UnitValue( 48*3.0, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/androidIcons/mipmap-xxhdpi/"+nameOnly+'.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES); 

			var folder = Folder(docPath+"/androidIcons/mipmap-xxxhdpi/");
			if(!folder.exists) folder.create();
			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( 48*4.0, 'px' );
			epsOpts.height = new UnitValue( 48*4.0, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+"/androidIcons/mipmap-xxxhdpi/"+nameOnly+'.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES); 
/*
			var epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true;  
			epsOpts.width = new UnitValue( epsOriginalWidth*4.0, 'px' );
			epsOpts.height = new UnitValue( epsOriginalHeight*4.0, 'px' );  

			var activeDocument= open(fileList[a],epsOpts); 
			   
			var saveFile = doc.path+'/ios/@3x/'+nameOnly+'@3x.png';  
			SavePNG(saveFile);  
			activeDocument.close(SaveOptions.DONOTSAVECHANGES);  
*/

		}  
	}  
};  

function SavePNG(path){  

	//var PNGOptions = new PNGSaveOptions(); 
	//activeDocument.saveAs(File(path), PNGOptions, true);
	var options = new ExportOptionsSaveForWeb();  
    options.quality = 100;   // Start with highest quality (biggest file).  
    options.format = SaveDocumentType.PNG;   // Save Format for the file  
    options.PNG8 = false;
    activeDocument.exportDocument(File(path), ExportType.SAVEFORWEB, options); 
}  
  
function SaveTiff(saveFile){  
	tiffSaveOptions = new TiffSaveOptions();  
	tiffSaveOptions.embedColorProfile = false;  
	tiffSaveOptions.imageCompression=TIFFEncoding.TIFFLZW  
	activeDocument.saveAs(saveFile, tiffSaveOptions, true,Extension.LOWERCASE);  
}  




