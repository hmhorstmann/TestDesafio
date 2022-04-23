<header>
	<h1 id="page-title">Xadrez</h1>
</header>
<main>
	<h2>Desafio</h2>
	<p>
		No tabuleiro de xadrez, a casa na linha 1, coluna 1 (canto superior esquerdo) é sempre branca e as cores das casas se alternam entre branca e preta, formando o formato tão conhecido como xadrez. Dessa forma, como o tabuleiro tradicional tem oito linhas e oito colunas, a casa na linha 8, coluna 8 (canto inferior direito) será também branca. Porém, neste problema, queremos ser capazes de predizer a cor independente do número de linhas e colunas, sendo: L linhas e C colunas. No exemplo da figura, para L = 6 e C = 9, a casa no canto inferior direito será preta, uma simples previsão matemática, não?
	</p>
	<table class="chess dark-mode">
		<thead>
			<tr>
				<th colspan="10" class="dark-mode">Xadrez</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th class="chess dark-mode">0</th>
				<th class="chess dark-mode">1</th>
				<th class="chess dark-mode">2</th>
				<th class="chess dark-mode">3</th>
				<th class="chess dark-mode">4</th>
				<th class="chess dark-mode">5</th>
				<th class="chess dark-mode">6</th>
				<th class="chess dark-mode">7</th>
				<th class="chess dark-mode">8</th>
				<th class="chess dark-mode">9</th>
			</tr>
			<tr>
				<th class="chess dark-mode">1</th>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
			</tr>
			<tr>
				<th class="chess dark-mode">2</th>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
			</tr>
			<tr>
				<th class="chess dark-mode">3</th>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
			</tr>
			<tr>
				<th class="chess dark-mode">4</th>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
			</tr>
			<tr>
				<th class="chess dark-mode">5</th>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
			</tr>
			<tr>
				<th class="chess dark-mode">6</th>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
				<td class="white dark-mode" style="width: calc(100% / 10);height: 0;padding-bottom: calc(80% / 8);"></td>
				<td class="black dark-mode"></td>
			</tr>
		</tbody>
	</table>
	<h2>Entrada</h2>
	<p>
		A primeira linha da entrada contém um inteiro <strong>L</strong> (1 ≤ <strong>L</strong> ≤ 1000) indicando o número de linhas do tabuleiro.
	</p>
	<p>
		A segunda linha da entrada contém um inteiro <strong>C</strong> (1 ≤ <strong>C</strong> ≤ 1000) representando o número de colunas.
	</p>
	<h2>Saída</h2>
	<p>
		Imprima uma linha na saída. A linha deve conter um inteiro, representando a cor da casa no canto inferior direito do tabuleiro, e para identificar, considere o inteiro 1 para a cor branca e 0 para a cor preta.
	</p>
	<table>
		<tr>
			<th>Exemplo de Entrada</th>
			<th>Exemplo de Saída</th>
		</tr>
		<tr>
			<td>6</td>
			<td>0</td>
		</tr>
		<tr>
			<td>9</td>
			<td></td>
		</tr>
	</table>
	<table>
		<tr>
			<td>8</td>
			<td>1</td>
		</tr>
		<tr>
			<td>8</td>
			<td></td>
		</tr>
	</table>
	<table>
		<tr>
			<td>5</td>
			<td>1</td>
		</tr>
		<tr>
			<td>91</td>
			<td></td>
		</tr>
	</table>
</main>