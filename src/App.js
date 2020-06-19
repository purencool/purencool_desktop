import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from './components/sidebar/SidebarComponent';
import HeaderComponent from './components/header/HeaderComponent';
import TestContentComponent from './components/content/test_page/ContentComponent';
import SupportContentComponent from './components/content/support_page/ContentComponent';
import './App.css';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh'
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }
});

class App extends React.Component {

    state = { selectedItem: 'Tickets' };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();

    render() {
        const { selectedItem } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />

                    <div className={css(styles.content)}>
                      {(() => {
                         console.log(selectedItem);
                        switch (selectedItem) {
                          case "Tickets":   return  <TestContentComponent title={selectedItem} />;
                          case "Support": return <SupportContentComponent title={selectedItem} />;
                          default:      return "#FFFFFF";
                        }
                      })()}
                    </div>
                </Column>
            </Row>
        );
    }
}

export default App;
