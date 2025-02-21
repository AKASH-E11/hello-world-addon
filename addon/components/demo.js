import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class DemoComponent extends Component {
    @action 
    handleClick(){
        console.log('Clicked');
    }
}
