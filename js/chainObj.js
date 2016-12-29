function Person(fName='default',mName='default',lName='default')
	{
		this.fName		=fName	;
		this.mName	=mName	;
		this.lName		=lName	;
	}
//https://schier.co/blog/2013/11/14/method-chaining-in-javascript.html
//each 'set' function returns itself, this allows the functions to be linked together 
//one after another. see LINE: 18
	Person.setfName	=function(fName	)	{this.fName	=fName;  return this;};
	Person.setmName	=function(mName	)	{this.mName	=mName;  return this;};
	Person.setlName	=function(lName	)	{this.lName	=lName;  return this;};
	Person.getfName	=function()				{return this.fName	};
	Person.getmName	=function()				{return this.mName	};
	Person.getlName	=function()				{return this.lName	};

	var me=Object.create(Person);

	me.setfName('Warren').setmName('S').setlName('Wyght');

	console.log('Hello, '+me.getfName()+' '+me.getmName()+' '+me.getlName()+'.');
