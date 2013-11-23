var destinationType;
var qrcode_image;
document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady() {
	destinationType=navigator.camera.DestinationType;
};

function onSuccessDataURI(imageData) {
  var qrcode = document.getElementById('qrcode');
  qrcode.src = imageData;
  
  qrcode_image = imageData;
};

function SnapPictureAndSave() {
    navigator.camera.getPicture(onSuccessDataURI, onFail, { 
    	quality: 50,
    	destinationType: destinationType.FILE_URI,
    	encodingType: navigator.camera.EncodingType.JPEG,
    	targetWidth:200, 
    	targetHeight:350, 
    	saveToPhotoAlbum: true 
    	});
};

function onFail(message) {
  alert('呼叫失敗, 原因: ' + message);
};

function DecodeQR(){
	qrcode.callback = showInfo;
	qrCodeDecoder();
};
function qrCodeDecoder() {
	//qrcode.decode('img/qr-code-justinsomnia.png');
	qrcode.decode(qrcode_image);
};

function showInfo(data) {
	alert(data);
};
