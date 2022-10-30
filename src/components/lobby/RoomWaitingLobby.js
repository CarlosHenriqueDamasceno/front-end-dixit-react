function RoomWaitingLobby()
{
    return(
        <div className="card rounded-4 col-md-4 p-4 align-self-center">
			<div className="text-center">
				<h2>Jogadores</h2>
				<div className="form-text">
					Aguardando início.
				</div>
                <ul class="list-group mt-3">
                    <li class="list-group-item">Brendo</li>
                    <li class="list-group-item">Carlos</li>
                </ul>
                <div class="form-check mt-2">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        value="1"
                        id="viewer-mode"/>
                    <label class="form-check-label" name="viewer_mode" for="viewer-mode">
                        Entrar como espectador
                    </label>
                </div>

                <button class="btn btn-lg btn-primary mt-3">Iniciar</button>

			</div>
        </div>
    );
}

export default RoomWaitingLobby;