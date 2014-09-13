#pragma strict
	var side:int[] = [1,-1];
	static var posy : float;
	var lol : int;
	lol = (side[Random.Range(0,2)]);
	
function Start () 
{
	rigidbody2D.velocity.x = (12 + Mathf.Floor(Random.Range(1,5))) * lol;
	rigidbody2D.velocity.y = Random.Range(-3,3);
	if ( rigidbody2D.velocity.x > 0)
	{
	rigidbody2D.position.x = -6;
	}
	else if ( rigidbody2D.velocity.x < 0 )
	{
	rigidbody2D.position.x = 6;
	}
}
	
function Update () {
		
		posy = rigidbody2D.position.y;

	

}