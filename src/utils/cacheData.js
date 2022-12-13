import { STORE } from "../Constant";

export const savePositionData = ( flag, object) =>
{
    let position = localStorage.getItem('current_position');
    if (position === null) position = -1;
    position = parseInt(position);

    // flag: 0 -> mouse down flag: 1 -> mouse up
    if ( flag === 0 )
        localStorage.setItem('temp_data', JSON.stringify(object.position));
    
    if ( flag === 1 )
    {
        let prev = JSON.parse(localStorage.getItem('temp_data'));
        let current = object.position;

        let positionData = localStorage.getItem('position_data');
        if (positionData === null || positionData === '') positionData = [];
        else positionData = JSON.parse(positionData);
        positionData = positionData.slice(0, position + 1);

        let data = {
            uuid: object.uuid,
            from: prev,
            to: current
        }
        console.log('data', data);
        positionData.push(data);
        localStorage.setItem("position_data", JSON.stringify(positionData));
        localStorage.setItem("position", position + 1);
        localStorage.setItem("current_position", position + 1);
        STORE.change = STORE.Change + 1;
    }
}

export const clearPositionData = () =>
{
    localStorage.setItem('temp_data', '');
    localStorage.setItem('position_data', '');
    localStorage.setItem('current_position', -1);
    localStorage.setItem('position', -1);
}

export const getPositionData = (position) => {
    let positionData = JSON.parse(localStorage.getItem('position_data'));
    return positionData[position];
}