import * as React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import testComp  from '../../../../src/core/components/layout/ExistingInputDeliverable';
jest.mock('html-react-parser');

describe('Notification Screen Bottom Menu',()=>{
     const props ={
         updateDeliverableValue: jest.fn(),
         isStatusEditable: true,
         id: 5,
         value: "test"
     };
    it('should be defined',()=>{
        expect(testComp).toBeDefined();

    });
    const tree = shallow(<testComp { ...props } />);
    it('should render correctly',()=>{
        expect(shallowToJson(tree)).toMatchSnapshot();
    });
    it('should call onChange prop with input value',()=>{
        const instance = tree.instance() as testComp;
        instance.changeDeliverableValue("test2")

        expect(props.updateDeliverableValue).toHaveBeenCalledTimes(1);
        expect(props.updateDeliverableValue).toHaveBeenCalledWith(5, "test2");
    });

});
