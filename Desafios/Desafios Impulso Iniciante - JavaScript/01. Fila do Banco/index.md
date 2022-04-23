<header>
	<h1 id="page-title">Fila do Banco</h1>
</header>
<main>
	<h2>Desafio</h2>
	<p>
		O banco que você trabalha sempre tem problemas para organizar as filas de atendimento dos clientes.
	</p>
	<p>
		Após uma reunião com a gerência ficou decidido que os clientes ao chegar na agência receberão uma senha numérica em seu aparelho de celular via sms e que a ordem da fila será dada não pela ordem de chegada, mas sim pelo número recebido via sms. A ordem de atendimento será decrescente: aqueles que receberam número maior deverão ser atendidos primeiro.
	</p>
	<p>
		Então, dada a ordem de chegada dos clientes reordene a fila de acordo com o número recebido via sms, e diga quantos clientes não precisaram trocar de lugar nessa reordenação.
	</p>
	<h2>Entrada</h2>
	<p>
		A primeira linha contém um inteiro <strong>N</strong>, indicando o número de casos de teste a seguir.
	</p>
	<p>
		Cada caso de teste inicia com um inteiro <strong>M</strong> (1 ≤ <strong>M</strong> ≤ 1000), indicando o número de clientes. Em seguida haverá <strong>M</strong> inteiros distintos <strong>Pi</strong> (1 ≤ <strong>Pi</strong> ≤ 1000), onde o <strong>i</strong>-ésimo inteiro indica o número recebido via sms do <strong>i</strong>-ésimo cliente.
	</p>
	<p>
		Os inteiros acima são dados em ordem de chegada, ou seja, o primeiro inteiro diz respeito ao primeiro cliente a chegar na fila, o segundo inteiro diz respeito ao segundo cliente, e assim sucessivamente.
	</p>
	<h2>Saída</h2>
	<p>
		Para cada caso de teste imprima uma linha, contendo um inteiro, indicando o número de clientes que não precisaram trocar de lugar mesmo após a fila ser reordenada.
	</p>
	<table>
		<tr>
			<th>Exemplo de Entrada</th>
			<th>Exemplo de Saída</th>
		</tr>
		<tr>
			<td>3</td>
			<td>1</td>
		</tr>
		<tr>
			<td>3</td>
			<td>0</td>
		</tr>
		<tr>
			<td>100 80 90</td>
			<td>4</td>
		</tr>
		<tr>
			<td>4</td>
			<td></td>
		</tr>
		<tr>
			<td>100 120 30 50</td>
			<td></td>
		</tr>
		<tr>
			<td>4</td>
			<td></td>
		</tr>
		<tr>
			<td>100 90 30 25</td>
			<td></td>
		</tr>
	</table>
</main>