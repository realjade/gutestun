$(function(){
	/*var camera, scene, renderer;
    var geometry, material, mesh;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;

        scene = new THREE.Scene();

        geometry = new THREE.CubeGeometry( 200, 200, 200 );
        material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        $('.webgl').append(renderer.domElement);

    }

    function animate() {

        // note: three.js includes requestAnimationFrame shim
        requestAnimationFrame( animate );

        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;

        renderer.render( scene, camera );

    }*/
    var width = 400,
    	height = 300;
    //设置相机的属性
    var view_angle = 45,
    	aspect = width/height,
    	near = 1,
    	far = 10000;
    //得到dom元素
    var container = $('.webgl');
    //创建一个webgl的渲染器和摄像机和一个场景
    
     camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
     camera.position.z = 1000;
    var scene = new THREE.Scene();
    //摄像机从0,0,0开始，因此默认远点，需要时回滚
    //设置摄像机z坐标位置距离原点向外300
    //camera.position.z = 300;
    //定义球体
    var radius = 300,
    	segments = 16,
    	rings = 16;
    //创建一个球体的材质
    var sphereMaterial =  new THREE.MeshLambertMaterial(
    {
    	color:0xCC0000
    });
    //创建光源
    var pointLight = new THREE.PointLight(0xFFFFFF);
    //设置光源点位置
    pointLight.position.x = 10;
    pointLight.position.y = 50;
    pointLight.position.z = 130;
    scene.add(pointLight);
    //创建一个新的网格球体几何学
    var sphere = new THREE.Mesh(
    	new THREE.SphereGeometry(radius,segments,rings),
    	sphereMaterial);
    //添加球体到场景
    scene.add(sphere);
    
    var renderer = new THREE.CanvasRenderer();
    //开始渲染
    renderer.setSize(width,height);
    container.append(renderer.domElement);
    animate();
    function animate() {

        // note: three.js includes requestAnimationFrame shim
        requestAnimationFrame( animate );

        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.02;
        sphere.rotation.z += 0.02;

        renderer.render( scene, camera );

    }
});