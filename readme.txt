======================================================
 Fetch verses discription by given inputs
======================================================

Desc : Custom Api for fetching verse detail.
      Here I have used  third party libray.

req.body : {
	"verses" : [{
		"name" : "john",
		"chapter" : "1",
		"verse" : "2"
	},{
		"name" : "genesis",
		"chapter" : "1",
		"verse" : "4"
	},
	{
		"name" : "john",
		"chapter" : "1",
		"verse" : "222"
	}]
}

response : 
    [
        {
            "invalidverse": "[john 1:222]",
            "invalidDescription": ""
        },
        {
            "verse": "[john 1:2]",
            "description": "The same was in the beginning with God.\n"
        },
        {
            "verse": "[genesis 1:4]",
            "description": "And God saw the light, that\nit was good: and God divided the light from the darkness.\n"
        }
    ]