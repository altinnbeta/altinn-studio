import { createStyles, ListItem, ListItemIcon, ListItemText, Paper, Theme, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { ComponentTypes } from '..';
import { getComponentTitleByComponentType } from '../../utils/language';

export interface IToolbarItemProvidedProps {
  classes: any;
  componentType: ComponentTypes;
  onClick: any;
  thirdPartyLabel?: string;
  icon: string;
}

export interface IToolbarItemProps extends IToolbarItemProvidedProps {
  language: any;
}

class ToolbarItem extends React.Component<IToolbarItemProps> {
  public render(): JSX.Element {
    return (
      <Paper square={true} classes={{ root: classNames(this.props.classes.paper) }}>
        <ListItem classes={{ root: classNames(this.props.classes.listItem) }}>
          <i className={this.props.icon} />
          <ListItemText
            classes={{
              primary: classNames(this.props.classes.listItemText),
              root: classNames(this.props.classes.listItemTextRoot),
            }}
          >
            {(this.props.thirdPartyLabel == null) ?
              getComponentTitleByComponentType(this.props.componentType, this.props.language) :
              this.props.thirdPartyLabel
            }
          </ListItemText>
          <ListItemIcon
            classes={{ root: classNames(this.props.classes.listItemIcon) }}
            onClick={this.props.onClick.bind(this, this.props.componentType)}
          >
            <svg width='20' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              {/* tslint:disable-next-line:max-line-length */}
              <path d='M9.02802 12.6935C9.03794 12.1032 9.10491 11.637 9.22892 11.2947C9.35292 10.9524 9.6059 10.573 9.98785 10.1563L10.9625 9.15184C11.3792 8.68061 11.5875 8.17466 11.5875 7.63399C11.5875 7.11315 11.4511 6.70641 11.1783 6.41375C10.9055 6.11613 10.5087 5.96732 9.98785 5.96732C9.48189 5.96732 9.07515 6.10125 8.76761 6.36911C8.46007 6.63696 8.3063 6.99659 8.3063 7.44797H6.92981C6.93973 6.6444 7.22495 5.99708 7.78546 5.50601C8.35094 5.00998 9.08507 4.76196 9.98785 4.76196C10.9253 4.76196 11.6545 5.01494 12.1753 5.52089C12.7011 6.02188 12.964 6.71137 12.964 7.58934C12.964 8.4574 12.5623 9.31305 11.7587 10.1563L10.9477 10.9599C10.5856 11.3617 10.4045 11.9395 10.4045 12.6935H9.02802ZM8.9685 15.0521C8.9685 14.8289 9.03546 14.6429 9.16939 14.4941C9.30828 14.3403 9.51166 14.2635 9.77951 14.2635C10.0474 14.2635 10.2507 14.3403 10.3896 14.4941C10.5285 14.6429 10.598 14.8289 10.598 15.0521C10.598 15.2754 10.5285 15.4614 10.3896 15.6102C10.2507 15.754 10.0474 15.826 9.77951 15.826C9.51166 15.826 9.30828 15.754 9.16939 15.6102C9.03546 15.4614 8.9685 15.2754 8.9685 15.0521Z' fill='#0062BA' />
              <circle cx='10.2632' cy='10' r='9.5' stroke='#0062BA' />
            </svg>
          </ListItemIcon>
        </ListItem>
      </Paper >
    );
  }
}

const styles = (theme: Theme) => createStyles({
  searchBox: {
    border: '1px solid #0062BA',
    marginTop: '10px',
    marginBottom: '24px',
    background: 'none',
  },
  searchBoxInput: {
    fontSize: '14px',
    color: '#6A6A6A',
    padding: '6px',
  },
  searchBoxIcon: {
    color: '#000000',
  },
  listItemText: {
    fontSize: '14px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  listItemTextRoot: {
    paddingRight: '0px',
  },
  listItem: {
    paddingLeft: '12px',
    paddingRight: '8px',
    paddingTop: '9px',
    paddingBottom: '8px',
  },
  paper: {
    marginBottom: '6px',
    backgroundColor: '#FFFFFF',

  },
  helpOutline: {
    width: '24px',
    height: '24px',
  },
  listItemIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const mapStateToProps: (
  state: IAppState,
  props: IToolbarItemProvidedProps,
) => IToolbarItemProps = (state: IAppState, props: IToolbarItemProvidedProps) => ({
  language: state.appData.language.language,
  componentType: props.componentType,
  onClick: props.onClick,
  classes: props.classes,
  thirdPartyLabel: props.thirdPartyLabel,
  icon: props.icon,
});

export const ToolbarItemComponent =
  withStyles(styles, { withTheme: true })(connect(mapStateToProps)(ToolbarItem));
