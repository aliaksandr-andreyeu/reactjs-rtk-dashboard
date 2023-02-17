import React, { useState } from 'react';

import { Checkbox } from '@components';
import { Sidebar, Header } from '../components';

import { getClassName } from '@helpers';

import './styles.scss';

const UsersScreen = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={getClassName('users-box', menuOpen && 'menu-open')}>
      <Sidebar />

      <div className='users-content'>
        <Header title={'Template Name'} isMenu={menuOpen} toggleMenu={toggleMenu} />

        <div className='users-container'>
          <table className='data-table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Job</th>
                <th>Active</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox
                    onClick={(event) => {
                      console.log('onClick', event, event.target, event.target.value);
                    }}
                    disabled={true}
                    checked={true}
                    containerClassName={'test-container'}
                    labelClassName={'test-label'}
                    checkboxClassName={'test-checkbox'}
                  />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox disabled={true} />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1111-222222-333333-444444-5555</td>
                <td>Name</td>
                <td>Surname</td>
                <td>50</td>
                <td>Job</td>
                <td>
                  <Checkbox />
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersScreen;
