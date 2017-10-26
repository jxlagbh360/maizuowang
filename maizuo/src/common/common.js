import URL from './urlApi.js'

export function handleImg(path){
	if(!path){
		return '';
	}
	//console.log(path)
	path=path.split('');
	path.splice(1,0,"/");
	path.splice(4,0,"/");
	path=path.join('')
	//console.log(path)
	if(path.endsWith('png')){
		path = path + '.png'
	}
	else if(path.endsWith('jpeg')){
		path = path + '.jpeg'
	}
	
	return URL.imgHost+path;
}

export function handleDetailImg(src){
    if(!src)
        {
            return ""; 
        }
    if(src.endsWith("png"))
        {
            return  URL.imgHost+"/"+src+".png?imageMogr/format/webp/thumbnail/!40p/blur/50x40/";
        }
    if(src.endsWith("jpeg"))
        {
            return  URL.imgHost+"/"+src+".jpeg?imageMogr/format/webp/thumbnail/!40p/blur/50x40/";
        }
    return "";

}