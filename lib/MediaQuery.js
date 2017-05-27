// @flow
import MediaQuerySelector, {MediaQuery as IMediaQuery} from "./MediaQuerySelector";
import ResponsiveComponent from "./ResponsiveComponent";

interface MediaQueryProps extends IMediaQuery {
    children?: React$Element<*>
}

export class MediaQuery extends ResponsiveComponent {

    props: MediaQueryProps;

    render(): ?React$Element<*> {
        const {width, height} = this.state.window;
        const val = MediaQuerySelector.query(this.props, width, height);
        if (val) {
            return this.props.children;
        } else {
            return null;
        }
    }
}