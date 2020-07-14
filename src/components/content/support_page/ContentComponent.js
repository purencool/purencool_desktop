import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import BugFormComponent from './parts/BugFormComponent';
import SupportArticlesComponent from './parts/SupportArticlesComponent';

const styles = StyleSheet.create({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30,
        }
    }
});

function ContentComponent(props) {
    return (
      <div className="container pr-0 pl-0">
        <Column>
            <Row horizontal="space-between" className={css(styles.lastRow)} breakpoints={{ 1024: 'column' }}>
              <BugFormComponent />
              <SupportArticlesComponent />
            </Row>
        </Column>
      </div>
    );
}

export default ContentComponent;
