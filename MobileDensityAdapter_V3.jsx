
  
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
			var folder = Folder(docPath+"/android/drawable-ldpi/");
			if(!folder.exists) folder.create();
			var epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true; 
			epsOpts.width = new UnitValue( epsOriginalWidth*0.75, 'px' );
			epsOpts.height = new UnitValue( epsOriginalHeight*0.75, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+'/android/drawable-ldpi/'+nameOnly+'.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES);  
			
			//mdpi e ios normal
			folder = Folder(docPath+"/android/drawable-mdpi/");
			if(!folder.exists) folder.create();
			folder = Folder(docPath+"/ios/@1x/");
			if(!folder.exists) folder.create();
			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true;  
			epsOpts.width = new UnitValue( epsOriginalWidth*1.0, 'px' );
			epsOpts.height = new UnitValue( epsOriginalHeight*1.0, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+'/android/drawable-mdpi/'+nameOnly+'.png');
			SavePNG(docPath+'/ios/@1x/'+nameOnly+'.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES);  
			
			//hdpi
			folder = Folder(docPath+"/android/drawable-hdpi/");
			if(!folder.exists) folder.create();
			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true;  
			epsOpts.width = new UnitValue( epsOriginalWidth*1.5, 'px' );
			epsOpts.height = new UnitValue( epsOriginalHeight*1.5, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+'/android/drawable-hdpi/'+nameOnly+'.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES);
			
			//xhdpi e ios @2x
			folder = Folder(docPath+"/android/drawable-xhdpi/");
			if(!folder.exists) folder.create();
			folder = Folder(docPath+"/ios/@2x/");
			if(!folder.exists) folder.create();
			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true;  
			epsOpts.width = new UnitValue( epsOriginalWidth*2.0, 'px' );
			epsOpts.height = new UnitValue( epsOriginalHeight*2.0, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+'/android/drawable-xhdpi/'+nameOnly+'.png');
			SavePNG(docPath+'/ios/@2x/'+nameOnly+'@2x.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES);
			
			//xxhdpi e ios @3x
			folder = Folder(docPath+"/android/drawable-xxhdpi/");
			if(!folder.exists) folder.create();
			folder = Folder(docPath+"/ios/@3x/");
			if(!folder.exists) folder.create();
			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true;  
			epsOpts.width = new UnitValue( epsOriginalWidth*3.0, 'px' );
			epsOpts.height = new UnitValue( epsOriginalHeight*3.0, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+'/android/drawable-xxhdpi/'+nameOnly+'.png');
			SavePNG(docPath+'/ios/@3x/'+nameOnly+'@3x.png');
			activeDocument.close(SaveOptions.DONOTSAVECHANGES);
			
			//xxxhdpi
			folder = Folder(docPath+"/android/drawable-xxxhdpi/");
			if(!folder.exists) folder.create();
			epsOpts = new EPSOpenOptions();  
			epsOpts.antiAlias = true;  
			epsOpts.mode = OpenDocumentMode.RGB;  
			epsOpts.resolution = 72;  
			epsOpts.constrainProportions = true;  
			epsOpts.width = new UnitValue( epsOriginalWidth*4.0, 'px' );
			epsOpts.height = new UnitValue( epsOriginalHeight*4.0, 'px' );
			activeDocument= open(fileList[a],epsOpts); 
			SavePNG(docPath+'/android/drawable-xxxhdpi/'+nameOnly+'.png');
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




