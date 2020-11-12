'use strict';

const e = React.createElement;

function ModificarDato() {
    const elemento = (
        <div>
            <div>
                <div>
                    <h3>Nombres</h3>
                </div>
                <div>
                    <h3>Apellidos</h3>
                </div>
                <div>
                    <h3>Correo electrónico</h3>
                </div>
                <div>
                    <h3>Carné</h3>
                </div>
                <div>
                    <h3>Contraseña</h3>
                </div>
            </div>
            <div>
                <form>
                    <div>
                        <input type="text" placeholder="Ingrese el nuevo nombre"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Ingrese el nuevo apellido"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Ingrese el nuevo correo"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Ingrese el nuevo carné"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Ingrese nueva contraseña"></input>
                    </div>
                </form>
                
            </div>
        </div>
    );
}

class ModificarDatos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return ModificarDato();
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#Contenido');ReactDOM.render(e(ModificarDatos), domContainer);