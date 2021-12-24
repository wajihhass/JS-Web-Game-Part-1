function newImage( y, z, f )
{
    let x = document.createElement('img')
    x.src = y
    x.style.position = 'fixed'
    x.style.left = z
    x.style.bottom = f
    document.body.append(x)  
}

newImage( 'assets/green-character.gif', '100px' ,'100px')
newImage( 'assets/pine-Tree.png', '450px' ,'200px')
newImage('assets/tree.png','200px','300px')
newImage('assets/pillar.png','350px','100px')
newImage('assets/crate.png','150px','200px')
newImage('assets/well.png','500px','425px')
newImage('assets/sword.png','500px', '405px')
newImage('assets/sheild.png','165px', '185px')
newImage('assets/staff.png', '600px', '100px')



