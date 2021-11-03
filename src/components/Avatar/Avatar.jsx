import React from 'react';
import MaterialAvatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { COLORS } from '../../styles/colors';
import Anonymous from '../../assets/svg/Anonymous';
import { hasFullName, getFirstLetter } from '../../utils/string';
import {
  AVATAR_SIZE_OPTIONS,
  AVATAR_SIZES,
  AVATAR_VIEWBOX_SIZES,
  AVATAR_FONT_SIZES
} from '../../styles/sizes';

// TODO: Add a border with a few color variants
// TODO: refactor to be a functional component

function buildStyle(props) {
  const backgroundColor = COLORS.primary;
  const textColor = COLORS.white;
  const style = {
    color: textColor,
    height: `${AVATAR_SIZES.get(props.size)}`,
    width: `${AVATAR_SIZES.get(props.size)}`,
    margin: props.margin ? props.margin : 'auto',
    fontSize: `${AVATAR_FONT_SIZES.get(props.size)}`,
    backgroundColor
  };
  return style;
}

class Avatar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
    this.styles = () => ({ root: buildStyle(this.props) });
  }

  handleError = (e) => {
    this.props.onError(e);
    this.setState({ error: true });
  };

  buildAvatar = () => {
    /* If there is an image URL, show the image.
     * If there is an error with the image, show the initials
     * If there are no initials (no first name OR no last name) show the default svg */
    const hasNoImageOrImageHasError = (!this.props.imageUrl || this.state.error) === true;
    const showImageAvatar = (this.props.imageUrl && !this.state.error) === true;
    const showInitialsAvatar =
      this.props.defaultToInitials &&
      hasNoImageOrImageHasError &&
      hasFullName(this.props.firstName, this.props.lastName);

    if (showImageAvatar) {
      const altInitials = '-';
      this.MaterialAvatar = withStyles(this.styles)((props) => {
        const { classes } = props;
        const height = AVATAR_SIZES.get(props.size);
        const width = height;
        return (
          <MaterialAvatar
            className="react-css"
            classes={{
              root: classes.root
            }}
            imgProps={{
              height,
              width
            }}
            onError={this.handleError}
            alt={altInitials}
            src={props.imageUrl}
            style={props.style}
          />
        );
      });
    } else if (showInitialsAvatar) {
      this.MaterialAvatar = withStyles(this.styles)((props) => {
        const { classes } = props;
        const initials = `${getFirstLetter(this.props.firstName)}${getFirstLetter(this.props.lastName)}`;
        return (
          <MaterialAvatar
            className="react-css"
            classes={{
              root: classes.root
            }}
            imgProps={{
              height: AVATAR_SIZES.get(props.size),
              width: AVATAR_SIZES.get(props.size)
            }}
            alt=""
            style={props.style}
          >
            {initials}
          </MaterialAvatar>
        );
      });
    } else {
      this.MaterialAvatar = withStyles(this.styles)(props => (
        <Anonymous
          fill={COLORS.primary}
          height={AVATAR_SIZES.get(props.size)}
          width={AVATAR_SIZES.get(props.size)}
          viewBox={AVATAR_VIEWBOX_SIZES.get(props.size)}
        />
      ));
    }
  };

  render() {
    this.buildAvatar();
    return <this.MaterialAvatar {...this.props} />;
  }
}

Avatar.propTypes = {
  /** url of avatar image */
  imageUrl: PropTypes.string,
  /** first name */
  firstName: PropTypes.string,
  /** last name */
  lastName: PropTypes.string,
  /** size options */
  size: PropTypes.oneOf(AVATAR_SIZE_OPTIONS),
  /** custom margin */
  margin: PropTypes.string,
  /** show initials as default if image doesn't exist  */
  defaultToInitials: PropTypes.bool,
  /** onError function */
  onError: PropTypes.func
};

Avatar.defaultProps = {
  firstName: null,
  lastName: null,
  imageUrl: null,
  size: 'small',
  margin: 'auto',
  defaultToInitials: true,
  onError: () => {}
};

export default Avatar;
