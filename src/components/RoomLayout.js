import { AXIS, DELTA_DIS, DIR, wallItems } from '../Constant';

function RoomLayout(props) {
    const { Room_types, AssignVal, flag, STORE, Update} = props;
    Update()
    return (<div className="roomsSideBar" style={{ display: (flag ? "" : "none") }}>
        <h4 className='mt-3'>Room Dimensions</h4>
        <div className="d-flex flex-wrap w-100">
            {Room_types.map(type => {

                return <div onClick={e => {

                    STORE.cwidth = Math.min(STORE.width - 1000, STORE.cwidth);
                    STORE.clength = Math.min(STORE.length - 1000, STORE.clength);
                    STORE.type = type;

                }} key={type} className={'tab' + (STORE.type === type ? ' active' : '')}>
                    <img src={"assets/ui/" + type + ".svg"} alt="" />
                </div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="width" className="form-label">Romm width : {STORE.width}</label>
            <input onChange={AssignVal} type="range" id='width' value={STORE.width} min={2100} max={10000} className="form-range" />
        </div>
        <div className="form-group">
            <label htmlFor="length" className="form-label">Room length : {STORE.length}</label>
            <input onChange={AssignVal} type="range" id='length' value={STORE.length} min={2100} max={10000} className="form-range" />
        </div>
        <div className="form-group">
            <label htmlFor="height" className="form-label">Ceiling height : {STORE.height}</label>
            <input onChange={AssignVal} type="range" id='height' value={STORE.height} min={2000} max={10000} className="form-range" />
        </div>

        {STORE.type > 1 && < div >
            <div className="form-group">
                <label htmlFor="cwidth" className="form-label">Cutout width : {STORE.cwidth}</label>
                <input onChange={AssignVal} type="range" id='cwidth' value={STORE.cwidth} min={1000} max={STORE.width - 1000} className="form-range" />
            </div>
            <div className="form-group">
                <label htmlFor="clength" className="form-label">Cutout length : {STORE.clength}</label>
                <input onChange={AssignVal} type="range" id='clength' value={STORE.clength} min={1000} max={STORE.length - 1000} className="form-range" />
            </div>
        </div>}


    </div>)
}

export default RoomLayout