const LearnSetup = () => {

    var currentclass = 0, currentsemester = 0, currentobjects = 2;

    const activate9 = () => {
        currentclass = 9;
        document.getElementById('9').classList.add('active');
        document.getElementById('10').classList.remove('active');
        document.getElementById('11').classList.remove('active');
        document.getElementById('12').classList.remove('active');
    }
    const activate10 = () => {
        currentclass = 10;
        document.getElementById('9').classList.remove('active');
        document.getElementById('10').classList.add('active');
        document.getElementById('11').classList.remove('active');
        document.getElementById('12').classList.remove('active');
    }
    const activate11 = () => {
        currentclass = 11;
        document.getElementById('9').classList.remove('active');
        document.getElementById('10').classList.remove('active');
        document.getElementById('11').classList.add('active');
        document.getElementById('12').classList.remove('active');
    }
    const activate12 = () => {
        currentclass = 12;
        document.getElementById('9').classList.remove('active');
        document.getElementById('10').classList.remove('active');
        document.getElementById('11').classList.remove('active');
        document.getElementById('12').classList.add('active');
    }
    const activateSemester1 = () => {
        currentsemester = 1;
        document.getElementById('sem1').classList.add('active');
        document.getElementById('sem2').classList.remove('active');
    }
    const activateSemester2 = () => {
        currentsemester = 2;
        document.getElementById('sem1').classList.remove('active');
        document.getElementById('sem2').classList.add('active');
    }
    const activatemat3 = () => {
        currentobjects++;
        document.getElementById('mat3').classList.add('active');
    }
    const activatemat4 = () => {
        currentobjects++;
        document.getElementById('mat4').classList.add('active');
    }
    const activatemat5 = () => {
        currentobjects++;
        document.getElementById('mat5').classList.add('active');
    }
    const activatemat6 = () => {
        currentobjects++;
        document.getElementById('mat6').classList.add('active');
    }
    return (  
        <div className="learn1">

            <div className="card position-absolute top-50 start-50 translate-middle" style={{width:"36rem", height:"36rem"}}>
                <div className="card-body">
                <h5 className="card-title">Setup</h5>
                <p className="card-text">Pentru a-ti genera calendarul de invatare, va trebui sa ne oferi cateva informatii.</p>
                    <div className="card" style={{width: "10rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Clasa</h5>
                            <p className="card-text"></p>
                            <div className="list-group">
                                <button type="button" className="list-group-item list-group-item-action" onClick={activate9} id="9">9</button>
                                <button type="button" className="list-group-item list-group-item-action" onClick={activate10} id="10">10</button>
                                <button type="button" className="list-group-item list-group-item-action" onClick={activate11} id="11">11</button>
                                <button type="button" className="list-group-item list-group-item-action" onClick={activate12} id="12">12</button>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{width: "10rem", marginTop:"-238px", marginLeft:"11rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Semestrul</h5>
                            <p className="card-text"></p>
                            <div className="list-group">
                                <button type="button" className="list-group-item list-group-item-action" onClick={activateSemester1} id="sem1">1</button>
                                <button type="button" className="list-group-item list-group-item-action" onClick={activateSemester2} id="sem2">2</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card position-absolute top-0" style={{width:"10rem", marginLeft:"22.7rem", marginTop:"113px"}}>
                    <div className="card-body">
                        <h5 className="card-title">Materii</h5>
                        <p className="card-text"></p>
                        <div className="list-group">
                            <button type="button" className="list-group-item list-group-item-action active" id="mat1">Lb. Romana</button>
                            <button type="button" className="list-group-item list-group-item-action active" id="mat2">Matematica</button>
                            <button type="button" className="list-group-item list-group-item-action" id="mat3" onClick={activatemat3}>Informatica</button>
                            <button type="button" className="list-group-item list-group-item-action" id="mat4" onClick={activatemat4}>Fizica</button>
                            <button type="button" className="list-group-item list-group-item-action" id="mat5" onClick={activatemat5}>Biologie</button>
                            <button type="button" className="list-group-item list-group-item-action" id="mat6" onClick={activatemat6}>Chimie</button>
                        </div>
                    </div>
                </div>    
            </div>            
        </div>
    );
}
 
export default LearnSetup;