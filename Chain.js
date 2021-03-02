class Chain {
constructor (body1, body2)
{
    var options={
        bodyA : body1,
        bodyB : body2,
        stiffness: 0.04,
        length : 10
    }

    this.mychain= Constraint.create (options);
    World.add(world,this.mychain);
}

display() {

   var posA=this.mychain.bodyA.position;
   var posB=this.mychain.bodyB.position;
    strokeWeight(4);
   line(posA.x, posA.y, posB.x, posB.y);
}

}

